function customRender(reactElement,root){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.Children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);

    // optimized version
    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    root.appendChild(domElement);
}

const anchorTag={
    type: "a",
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children:"click me to visit google"

}

const h1Tag={
    type: "h1",
    props:{
        class:"h1"
    },
    Children:"Google"

}

const paraTag={
    type: "p",
    props:{
        class:"para"
    },
    Children:"Explore your imagination"

}

let tags=[h1Tag,paraTag,anchorTag];

const root=document.querySelector('#root');

for(let tag of tags){
    customRender(tag,root);
}
