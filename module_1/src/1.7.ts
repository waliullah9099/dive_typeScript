{
    // spread operator
    // rest operator
    // destructuring


    const friends1: string[] = ['Hussain', 'Arafat', 'Yeasin'];
    const friends2: string[] = ['MAzhar', 'Emon'];
    friends1.push(...friends2);

    const teachers1 = {
        typeScript: "Mezbah",
        redux: "Mir Hossain",
        dbms: "Mizan"
    }

    const teachers2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid'
    }

    const teachersList = {
        ...teachers1, ...teachers2
    }

    // rest 
    const greatFriends = (...fnds: string[]) => {
        // return (`Hi ${fnd1} ${fnd2} ${fnd3}`)
        fnds.forEach((fnd: String) => {
            console.log(`Hi ${fnd}`);
        });
    }
    greatFriends('Sei', 'Nei', 'Tai', 'Hoy', 'Akai');








}