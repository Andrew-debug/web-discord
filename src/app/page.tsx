export default async function Home() {
  const response = await fetch("http://localhost:3000/api/userData").then(
    (res) => res.json()
  );
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-[240px] min-w-[240px] bg-primary-white dark:bg-dark-600"></div>
      <div>user main</div>
    </div>
  );
}
