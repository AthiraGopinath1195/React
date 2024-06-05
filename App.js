// creating html tags in Javascript

// const heading = React.createElement('h1',{id:'heading'},'Hello World from React!')
// const root = ReactDOM.createRoot(document.getElementById('root'))

// nested tags in Javascript
{/* <div id='parent'>
    <div id='child'>
        <h1>
            Im h1 tag
        </h1>
    </div>
</div> */}

// const parent = React.createElement('div',{id:'parent'},
//     React.createElement('div',{id:'child'},
//         React.createElement('h1',{},'Im H1 tag!!')
//     )
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent)

// nested tags with siblings in Javascript
{/* <div id='parent'>
    <div id='child'>
        <h1>
            Im h1 tag
        </h1>
        <h2>
            Im h2 tag
        </h2>
    </div>
</div> */}

const parent = React.createElement('div',{id:'parent'},
    React.createElement('div',{id:'child'},
        [React.createElement('h1',{},'Im H1 tag!!'),React.createElement('h2',{},'Im H2 tag!!')]
    )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)