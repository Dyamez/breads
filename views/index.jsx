const React = require('react')
const Default = require('./layouts/default')

function Index ({breads, bakers, title})  {
    return (
        <Default title={title}>
        <h3>Bakers</h3>
        <ul>
            {
                bakers.map((baker)=> {
                    return (
                        <li key={baker._id}>
                            <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                        </li>
                    )
                })
            }
        </ul>
        <h3>Breads</h3>
        <ul>
            {
                breads.length ? breads.map((bread, index) => {
                    const breadId = bread._id;
                return (
                <li key={index}> 
                    <a href={`/breads/${bread._id}`}>
                    {bread.name}
                    </a>: {bread.getBakedBy()}
                </li>
                )
            }) :(<div>You're out of Bread!</div>)
            }
        </ul>
        <div className="newButton">
        <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
        </Default>
    )
}

module.exports = Index