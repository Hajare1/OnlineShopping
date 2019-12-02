export class Product {
    price: string;
    latestReviewDate: string;
    domain: string;
    imageUrl: string;
    name: string;
    title: string;
    category: string;
    productId: string;
    createdAt: string;
    reviewCount: number;
    topScores: Score[];
}

export class Score {
    topic: string;
    score: number;
}
