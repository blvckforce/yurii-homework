import axios from 'axios';

const BASE_URL = 'https://www.boredapi.com/api/';

export async function fetchRandomActivity() {
    try {
        const response = await axios.get(`${BASE_URL}activity`);

        if (!response.data) {
            throw new Error('Failed to fetch activity');
        }

        const { activity, accessibility, price, type, participants, link, key } = response.data;

        return {
            activity,
            accessibility: mapAccessibility(accessibility),
            price: mapPrice(price),
            type,
            participants,
            link,
            key,
        };
    } catch (error) {
        throw new Error('Failed to fetch activity');
    }
}

function mapAccessibility(accessibility: number): string {
    if (accessibility <= 0.25) {
        return 'High';
    } else if (accessibility <= 0.75) {
        return 'Medium';
    } else {
        return 'Low';
    }
}

function mapPrice(price: number): string {
    if (price === 0) {
        return 'Free';
    } else if (price <= 0.5) {
        return 'Low';
    } else {
        return 'High';
    }
}
