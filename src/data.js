export const API_KEY = 'AIzaSyDInL86E16T5l1JoIrH7QUQiJQLR4ByTc8'

export const value_converter = (value) => {
    if(value > 1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value >= 1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
        {
        return value;
    }
}   