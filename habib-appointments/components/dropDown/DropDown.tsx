

const DropDown = () => {
    const accompagnants = ['tous', 'anouar', 'olfa', 'yannick', 'malek']
    return (
    <>
       <label htmlFor="select-accompagnants">Choisir un accompagnant</label>
        <select name="accompagnants" id="select-accompagnants">
        {accompagnants.map((accompagnant) => (
            <option value="accompagnants" key={accompagnant}>
                {accompagnant}
            </option>
        ))}
        </select>
    </>
     )};
    
    export default DropDown;