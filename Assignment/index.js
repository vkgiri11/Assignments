const resultList = document.getElementById('searchedPersonsList');

const findPerson = (personsList) => {

    document.getElementById("btn").addEventListener("click", () => {
        const personName = document.getElementById("searchBar").value.toLowerCase();

        const searchedPersonsList = personsList.filter((person) => person.employeName.toLowerCase() === personName);

        displaySearchedPerson(searchedPersonsList);
    });

}

const displaySearchedPerson = (searchedPersonsList) => {
    const htmlString = searchedPersonsList.map((person) => {

        const workingHours = (checkInTime, checkOutTime) => {
            const inTimeHour = checkInTime.split(":")[0];
            const inTimeMin = checkInTime.split(":")[1];

            const outTimeHour = checkOutTime.split(":")[0];
            const outTimeMin = checkOutTime.split(":")[1];

            return (outTimeHour - inTimeHour) + ((outTimeMin - inTimeMin) / 60);
        }

        return `
            <li class="person">
                <p>Name : ${person.employeName}</p>
                <p>Department : ${person.dept}</p>
                <p>Date : ${person.date}</p>
                <p>Check-In-Time : ${person.checkinTime}</p>
                <p>Check-Out-Time : ${person.checkouttime}</p>
                <p>Working Hours : ${workingHours(person.checkinTime, person.checkouttime)}</p>
            </li>
        `;
    }).join('');

    resultList.innerHTML = htmlString;
}

const searchPerson = async () => {
    try {
        const res = await fetch("./AttendanceRegister.json");
        personsList = await res.json();
        findPerson(personsList);
    } catch (err) {
        console.error(err);
    }
};

searchPerson();