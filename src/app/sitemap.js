export default async function sitemap() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
        if (!response.ok) throw new Error('Failed to fetch products');
        const products = await response.json();
        const productEntries = products.map(_p => {
            return {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/product/${_p.mpn}`,
                lastModified: new Date(),
                changeFrequency: 'yearly',
                priority: 1,
            };
        });

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auction`);
        if (!res.ok) throw new Error('Failed to fetch auctions');
        const auctions = await res.json();
        const auctionEntries = auctions.map(_b => {
            return {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/bid/${_b.bidId}`,
                lastModified: new Date(),
                changeFrequency: 'yearly',
                priority: 1,
            };
        });

        // const departmentResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/departments`);
        // if (!departmentResponse.ok) throw new Error('Failed to fetch departments');
        // const departments = await departmentResponse.json();
        // const departmentEntries = departments.flatMap(_d => {
        //     return _d.categories.flatMap(_c => {
        //         return _c.segments.map(_s => {
        //             return {
        //                 url: `${process.env.NEXT_PUBLIC_BASE_URL}/${_d.department}/${_c.name}/${_s}`,
        //                 lastModified: new Date(),
        //                 changeFrequency: 'yearly',
        //                 priority: 1,
        //             };
        //         });
        //     });
        // });

        return [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
                lastModified: new Date(),
                changeFrequency: 'yearly',
                priority: 1,
            },
            ...productEntries,
            ...auctionEntries,
            // ...departmentEntries
        ];
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return [];
    }
}