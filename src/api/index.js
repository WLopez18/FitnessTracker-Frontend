const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com'

// user
const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/api/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: `${username}`,
                password: `${password}`
            }),
        });
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
};

const registerUser = async (username, password) => {
	try {
			const response = await fetch(`${BASE_URL}/api/users/register`, {
					method: "POST",
					headers: {
							'Content-Type': 'application/json',
					},
					body: JSON.stringify({
							username: `${username}`,
							password: `${password}`
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
                Authorization : `Bearer ${token}`,
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
const createRoutine = async (token) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: 'Long Cardio Routine',
              goal: 'To get your heart pumping!',
              isPublic: true
            }),
          }
          );
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error)
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
		registerUser,
};