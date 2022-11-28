import Main from "../lib/components/Main/main";
import SignIn from "../lib/components/SignIn/signIn";
import SignUp from "../lib/components/SignUp/signUp";
import ForgotPassword from "../lib/components/ForgotPassword/forgotPassword";
import ResetPassword from "../lib/components/ResetPassword/resetPassword";
import PageNotFound from "../lib/components/PageNotFound/pageNotFound";
import Friends from "../lib/components/Friends/friends";
import User from "../lib/components/User/user";

const publicRouter = [
	{ path: "*", component: PageNotFound, layout: '' },
	{ path: "/sign-in", component: SignIn, layout: null },
	{ path: "/sign-up", component: SignUp, layout: null },
	{ path: "/forgot-password", component: ForgotPassword, layout: null },
	{ path: "/reset-password", component: ResetPassword, layout: null },
	{ path: "/messenger/:id", component: Main, layout: '' },
	{ path: "/", component: Main, layout: '' },
	{ path: "/friends", component: Friends, layout: '' },
	{ path: "/user", component: User, layout: '' },

];
// const privateRouter = [];
export { publicRouter };
