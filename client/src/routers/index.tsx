import HeaderOnly from "../lib/components/Layout/headerOnly";
import Learn from "../lib/components/learn/learn";
import Main from "../lib/components/Main/main";
import Messenger from "../lib/components/messenger/messenger";
import SignIn from "../lib/components/SignIn/signIn";
import SignUp from "../lib/components/SignUp/signUp";
import ForgotPassword from "../lib/components/ForgotPassword/forgotPassword";
import ResetPassword from "../lib/components/ResetPassword/resetPassword";
import PageNotFound from "../lib/components/PageNotFound/pageNotFound";
import Profile from "../lib/components/Profile/profile";
import Rank from "../lib/components/Rank/rankPage";

const publicRouter = [
	{ path: "*", component: PageNotFound, layout: HeaderOnly },
	{ path: "/profile", component: Profile, layout: "" },
	{ path: "/rank", component: Rank, layout: "" },
	{ path: "/sign-in", component: SignIn, layout: null },
	{ path: "/sign-up", component: SignUp, layout: null },
	{ path: "/forgot-password", component: ForgotPassword, layout: null },
	{ path: "/reset-password", component: ResetPassword, layout: null },
	{ path: "/messenger", component: Messenger, layout: HeaderOnly },
	{ path: "/messenger/:id", component: Messenger, layout: HeaderOnly },
	{ path: "/learn", component: Learn, layout: "" },
	{ path: "/", component: Main, layout: "" },
];
// const privateRouter = [];
export { publicRouter };
