{
    // nullable types
    const searchName = (value: string | null) => {
        if (value) {
            console.log('searching........');
        } else {
            console.log('There is no search');

        }
    }

    // searchName('')

    // unknown types
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const converted = (value * 1000) / 3600;
            console.log(`The speed is ${converted} ms^1`);
        } else if (typeof value === 'string') {
            const [val, unit] = value.split(' ');
            const converted = (parseFloat(val) * 1000) / 3600;
            console.log(`The speed is ${converted} ms^1`);

        } else {
            console.log('worng input');

        }
    }
    getSpeedInMeterPerSecond(null)


    // never 

    const throughErr = (msg: string): never => {
        throw new Error(msg);
    }
    throughErr('miss this days')














}