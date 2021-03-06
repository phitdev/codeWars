// Remove String Spaces - 8kyu

// P - String
// R - String without spaces
// E - 'My name is Philip' => 'MynameisPhilip'

function noSpace(str) {
    // Split string into array of elements
    str = str.split('');
    // Filter and trim newArr
    str = str.filter(e => e.trim().length);
    // Join array together
    str = str.join('');
    return str;
}

// Also written as:
// function noSpace (x) {
//    return x.split(' ').join('');
//}

//    newArr = newArr.join('');
//    return newArr
//}
