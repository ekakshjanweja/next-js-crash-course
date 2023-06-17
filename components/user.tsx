function User({ user }: { user: any }) {
  return (
    <div className="flex-col justify-center mt-20 max-w-xl mx-auto">
      <p className="text-2xl hover:text-blue-600 font-mono font-normal">
        {user.name}
      </p>
      <p className="text-lg hover:text-yellow-500 font-mono font-normal">
        Email: {user.email}
      </p>
      <p className="text-lg hover:text-yellow-500 font-mono font-normal">
        UID: {user.id}
      </p>
      <p className="text-lg hover:text-yellow-500 font-mono font-normal">
        Mobile: {user.phone}
      </p>
    </div>
  );
}

export default User;
