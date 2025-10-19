const Page= async ({params})=>{

  const {userId}=await params;

  return <div>
    User ID: {userId}

  </div>

}

export default Page;