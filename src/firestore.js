import {firestore} from './firebaseConfig';

export const getShops = async () => {
    const snapshot = await firestore.collection('businesses').get();
    const shops = [];

    snapshot.forEach((doc) => {
        const data = doc.data();
        shops.push({
            id: doc.id,
            name: data.name,
            address: data.address,
            phone: data.phone,
            email: data.email,
            website: data.website,
            description: data.description,
            logoUrl: data.logoUrl,
            category: data.category,
            openingHours: data.openingHours,
            socials: data.socials,
        });
    });
    
    return shops;
};