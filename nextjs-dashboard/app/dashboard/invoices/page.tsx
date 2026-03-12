
export default async  function Page(){
   console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return <p>Invoices Page</p>
}