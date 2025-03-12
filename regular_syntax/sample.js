
/*
    TEMPLATE LITERAL
The backticks (`) create a template literal, a modern JavaScript feature for string interpolation.
Use ${variable} to insert value of variable to the string
 */
let user = 'Duy';
let msg = `hello ${user}!`;
console.log(msg);

/*
    Array.from: convert jquery object to javascript array
    map: transfer each value of array into new value
    join: combine all elements in the array into single string
 */
const getSelectedValues = (selector) => {
    const $options = $(`${selector} option`);
    if (!$options.length) return '';

    return Array.from($options)
        .map(option => option.value)
        .join(',');
};

/*
--------------OBJECT DESTRUCTURING
Definition: to extract specific properties from an object and assign them to variables in a concise way.
How It Works:
- in response.forEach(({ code, codeDescL }), each element of response is an object
- { code, codeDescL }: will tell js to take the current object and extract the corresponding properties to the same variable name
 */
const callAjax = () => {
    $.ajax({
        url: '/clos/ajax/industry/getPSICByNature',
        method: 'GET',
        data: { natureOfBusinessCode },
        async: false,
        success: (response) => {
            if (!response || !Array.isArray(response)) return;

            response.forEach(({ code, codeDescL }) => {
                const optionText = `${code} - ${codeDescL}`;
                const $option = $(`<option value="${code}">${optionText}</option>`);

                if (psicCode && isValueSelected(psicCode, code)) {
                    $psicSelect.append($option);
                } else {
                    $availablePsicSelect.append($option);
                }
            });
        },
        error: (xhr, status, error) => {
            console.error('AJAX request failed:', status, error);
        }
    });
}