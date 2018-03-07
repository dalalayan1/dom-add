/**
     * domELementCreator - creates dom element according to input object
     * @param {object} elementObj - object with details of new elements to be created
     * @param {object} parentElement - parent element inside which the generated markup needs to be appended as child(optional)
     * 
     * @returns {object} - created dom element(s)
     */
const domELementCreator = function (elementObj, parentElement) {

    const { tag, attrs, children, innerText, innerHTML } = elementObj;
    let newEle = document.createElement(tag);

    if (attrs) {
        for (var key in attrs) {
            newEle.setAttribute(key, attrs[key]);
        }
    }

    if (innerText) {
        newEle.innerText = innerText;
    }

    if (innerHTML) {
        newEle.innerHTML = innerHTML;
    }

    if (children && children.length) {
        children.forEach((child) => {
            var childElement = domELementCreator(child);
            newEle.appendChild(childElement);
        })
    }

    if (parentElement) {
        parentElement.appendChild(newEle);
    }
    else {
        return newEle;
    }


}


module.exports = {
    domELementCreator
};