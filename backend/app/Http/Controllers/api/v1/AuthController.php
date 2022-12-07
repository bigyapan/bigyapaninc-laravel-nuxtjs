<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $login = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        if (!Auth::attempt($login)) {
            return response()->json([
                'type' => 'error',
                'message' => 'Invalid login credentials.'
            ], 401);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        return response()->json([
            'type' => 'success',
            'message' => 'Login Successful',
            'data' => [
                'user' => auth()->user(),
                'accessToken' => $accessToken,
            ]
        ]);
    }

    public function register(Request $request)
    {
        $register = $request->validate([
            'name' => 'required|string',
            'email' => 'email|required|string|unique:users',
            'password' => 'required|string|confirmed|min:8',
        ]);

        $register['password'] = Hash::make($register['password']);

        if (!User::create($register)) {
            return response()->json([
                'type' => 'error',
                'message' => 'User registration not successful.'
            ], 401);
        }

        return response()->json([
            'type' => 'success',
            'message' => 'User registration successful.'
        ]);
    }

    public function logout(Request $request)
    {
        $accessToken = $request->user()->token();
        if ($accessToken->revoke()) {
            return response()->json([
                'type' => 'success',
                'message' => 'User logout successful.'
            ], 200);
        };
        return response()->json([
            'type' => 'error',
            'message' => 'User logout not successful.'
        ], 402);
    }
}
