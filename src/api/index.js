const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com'

// user
const loginUser = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'superman27',
                password: 'krypt0n0rbust'
            }),
        });
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
};

const getUser = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/api/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const result = response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
}

// Routines

const getAllRoutines = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/routines`);
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
}

// Activities

const getAllActivities = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/activities`);
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    getAllRoutines,
    getAllActivities,
    loginUser,
    getUser,
};