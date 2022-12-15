import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const CoffeeStore = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log("router =>", router);

    return (
        <div>CoffeeStore with id {id}
            <Link href={"/"}>Back To Home</Link>
        </div>
    )
}

export default CoffeeStore