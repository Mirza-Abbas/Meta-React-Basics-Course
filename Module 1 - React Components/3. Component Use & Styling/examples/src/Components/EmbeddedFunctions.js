function formatName (firstName, secondName) {
    return firstName + ' ' + secondName;
}

const FullName = <p>{formatName("Jane", "Watson")}</p>;

function EmbeddedFunctions(){
    return FullName;
}

export default EmbeddedFunctions;