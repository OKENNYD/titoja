// Code Generated with love
export default function ChangePassword() {

  //   const getPassword = async (formData) => {
  //     const data = {
  //       password: formData.get("password")
  //     }
  //     console.log(data);
  // }
    return (
      <main className="w-full h-dvh flex items-center justify-center">
        <div className="w-1/4 max-md:w-4/5 bg-white rounded-2xl h-auto p-6 max-md:px-2 max-md:my-4">
          <p className="text-dim mb-2 text-xl font-bold text-center">
            New password
          </p>
          <form
            method="post"
            className="max-md:px-2 flex flex-col gap-4"
          >
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className=" p-2 ps-3 border-primary w-full h-10 caret-secondary text-base placeholder:text-gray-300 bg-gray-200 rounded-full text-dark"
            />
            <button
            name="Change Password"
              type="submit"
              className="my-2 bg-primary w-full h-10 rounded-full text-white"
            >
              Change Password
            </button>
          </form>
        </div>
      </main>
    );
  }
  