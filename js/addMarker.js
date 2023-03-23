AFRAME.registerComponents("create markers",{
    init: async function(){
        var mainScene = document.querySelector("#main-scene")
        var toys = await this.getAllToys()
        toys.map(toys=>{
            var marker = document.createElement("a-marker")
            marker.setAttribute("id",toys.id)
            marker.setAttribute("type", "pattern")
            marker.setAttribute("url",toys.marker_pattern_url)
            marker.setAttribute("cursor",{
                rayOrigin:"mouse"
            }),
            marker.setAttribute("markerHandler",{})
            mainScene.appendChild(marker)
            
            var model = document.createElement("a-entity")
            model.setAttribute("id",`model-${toys.id}`)
            model.setAttribute("position",toys.geometry.position)
            model.setAttribute("rotation",toys.geometry.rotation)
            model.setAttribute("scale",toy.geometry.scale)
            model.setAttribute("gltf-model",`model-${toys.model_url}`)
            model.setAttribute("gesture-handler",{})
            model.setAttribute("animation-mixer",{})
            model.appendChild(mainPlane)
        
        
            var mainPlane = document.createElement("a-plane")
            mainPlane.setAttribute("id",`main-plane-${toys.id}`)
            mainPlane.setAttribute("positon",{x:0,y:0,z:0})
            mainPlane.setAttribute("rotation",{x:-90,y:0,z:0})
            mainPlane.setAttribute("material",{color:"#ffd880"})
            mainPlane.setAttribute("width",2.3)
            mainPlane.setAttribute("height",2.5)
            marker.appendChild(mainPlane)

            var titlePlane = document.createElement("a-plane")
            titlePlane.setAttribute("id",`title-plane-${toy.id}`)
            titlePlane.setAttribute("postion",{x:0,y:1.1,z:0.1})
            titlePlane.setAttribute("rotation",{x:0,y:0,z:0})
            titlePlane.setAttribute("width",2.31)
            titlePlane.setAttribute("height",2.5)
            titlePlane.setAttribute("material",{color:"#f14668"})
            mainPlane.appendChild(titlePlane)

            var ToyTitle =document.createElement("a-entity")
            ToyTitle.setAttribute("id",`toy-title-${toys.id}`)
            ToyTitle.setAttribute("position",{x:1.3,y:0,z:0.1})
            ToyTitle.setAttribute("rotation",{x:0,y:0,z:0})
            ToyTitle.setAttribute("text",{
                font:"aileronsemibold",
                color: "#290149",
                width:4.5,
                align:"left",
                value: toys.toy_name.toUpperCase()
            });
            titlePlane.appendChild(ToyTitle)

            var price = document.createElement("a-entity")
            price.setAttribute("position",{x:-0.65,y:0.75,z:0.1})
            price.setAttribute("rotation",{x:-0,y:0,z:0})
            price.setAttribute("text",{
                font:"aileronsemibold",
                color:"#290149",
                width:5,
                align:"center",
                value:`$${toys.price}`    
            });
            mainPlane.appendChild(price)
            var description = ("id",`description-${toys.id}`)
            description.setAttribute("position",{x:0.04,y:0,z:0})
            description.setAttribute("rotation",{x:0,y:0,z:0})
            description.setAttribute("text",{
                font:"dejavu",
                color:"#6b011f",
                width:2,
                height:5,
                letterSpacing:2,
                lineHeight:50,
                align:"left",
                value:`${toys.description}`
            })

            var age = document.createElement("a-entity")
            age.setAttribute("id",`age-${toys.id}`)
            age.setAttribute("position",{x:-0.75,y:-0.8,z:0.1})
            age.setAttribute("rotation",{x:0,y:0,z:0})
            age.setAttribute("text",{
                font:"aileronsemibold",
                color:"#290149",
                width:2,
                height:5,
                align:"center",
                value:`AGE: ${toys.age_group}`
            })
            mainPlane.appendChild(age)

        })
    },
    getAllToys:async function(){
        return await firebase
        .firestore()
        .collection("toys")
        .get()
        .then(snap=>{
            return snap.docs.map(doc=>doc.data())
        })

    }
})