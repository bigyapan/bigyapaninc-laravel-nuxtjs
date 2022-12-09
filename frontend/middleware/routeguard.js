export default function ({app, store, redirect, route}) {
  if (!app.$cookiz.get('accessToken')) {
    if (!route.path.includes('login')) {
      return redirect("/admin/login");
    }
  } else {
    if (route.path.includes('login')) {
      return redirect("/admin/dashboard")
    }
  }
}
