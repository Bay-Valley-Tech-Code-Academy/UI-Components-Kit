const cardFiveCode = `export default function cardFive() {

    const [forgotPassword, setForgotPassword] = useState(false);
    const [signUp, setSignUp] = useState(false);

    return (
        <>
            <div className="w-3/4 sm:w-1/2 lg:w-1/4 bg-[#AAD15F] rounded-xl flex flex-col items-center">
                <h1 className="text-6xl p-3 text-center">Login</h1>
                {!forgotPassword ? (
                <form className="flex flex-col w-3/4 pt-6">
                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="mb-4 p-1"
                    />
                    {signUp && (
                    <input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        required
                        className="mb-4 p-1"
                    />
                    )}
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="mb-4 p-1"
                    />
                    {signUp && (
                    <input
                        type="password"
                        name="verifyPassword"
                        placeholder="Verify Password"
                        required
                        className="mb-4 p-1"
                    />
                    )}
                    <div className="text-center p-2">
                    <button
                        type="submit"
                        className="bg-[#FDE4CE] hover:bg-[#FBCDAC] p-2 rounded-xl"
                    >
                        {signUp ? "Sign Up" : "Sign In"}
                    </button>
                    </div>
                    <div className="text-center p-2">
                    {signUp ? (
                        <p>
                        Have an account:
                        <span
                            className="text-[#D22701] hover:cursor-pointer hover:text-[#4E070C] pl-1"
                            onClick={() => {
                            setSignUp(!signUp);
                            }}
                        >
                            Sign In
                        </span>
                        </p>
                    ) : (
                        <p>
                        Don't have an account:
                        <span
                            className="text-[#D22701] hover:cursor-pointer hover:text-[#4E070C] pl-1"
                            onClick={() => setSignUp(!signUp)}
                        >
                            Sign Up
                        </span>
                        </p>
                    )}
                    <p>
                        <span
                        className="text-[#D22701] hover:cursor-pointer hover:text-[#4E070C] pl-1"
                        onClick={() => setForgotPassword(true)}
                        >
                        Forgot Password?
                        </span>
                    </p>
                    </div>
                </form>
                ) : (
                <form
                    className="flex flex-col w-3/4 pt-6"
                >
                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="mb-4 p-1"
                    />
                    <div className="text-center p-2">
                    <button
                        type="submit"
                        className="bg-[#FDE4CE] hover:bg-[#FBCDAC] p-2 rounded-xl"
                    >
                        Reset
                    </button>
                    </div>
                    <p className="text-center">
                    <span
                        className="text-[#D22701] hover:cursor-pointer hover:text-[#4E070C]"
                        onClick={() => setForgotPassword(false)}
                    >
                        Back to Sign In
                    </span>
                    </p>
                </form>
                )}
            </div>
        </>
    )
}`;

export default cardFiveCode;