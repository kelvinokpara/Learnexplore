


const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <SelectSidePage />
      <div className="w-2/5">
        <Input type={"text"} useType="auth" label={"email"} />
      </div>

    </div>
  );
};

export default HomePage;
