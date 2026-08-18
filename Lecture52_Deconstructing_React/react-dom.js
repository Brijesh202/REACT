export function render(reactElement, rootElement){
    function createDOMElement(reactElement){


        if(typeof reactElement.type === 'function'){
            return createDOMElement(reactElement.type(reactElement.props))
        }

        if(Array.isArray(reactElement)){
            return reactElement.map((el) => createDOMElement(el))
        }

        if(typeof reactElement === 'string'){
            return document.createTextNode(reactElement)
        }

        const {type, props} = reactElement
        const DOMElement = document.createElement(type)
        Object.entries(props).forEach(([key,value]) => {
            // console.log(key,value)
            if(key === 'children'){
                return
            }
            DOMElement[key] = value
        })

        props.children?.forEach((child) => {
            if(Array.isArray(child)){
                DOMElement.append(...child.map((el) => createDOMElement(child)))
            }
            // console.log(child)
            else if(typeof child === 'string'){
                const textNode = document.createTextNode(child)
                DOMElement.append(textNode)
            } else {
                // console.log(child)
                DOMElement.append(createDOMElement(child))
            }
        })

        return DOMElement
    }
    
    const DOMElement = createDOMElement(reactElement)
    if(Array.isArray(reactElement)){
        rootElement.append(...DOMElement)
    } else {
        rootElement.append(DOMElement)
    }
}