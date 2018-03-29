import style from '../components/UberMap/UberMapStyle.jsx'

const UPDATE_LAT_LNG = 'UPDATE_LAT_LNG'
const ADD_REACTMAPGL_STYLE = 'ADD_REACTMAPGL_STYLE'
const CHANGE_LAYER_STYLE_PAINT = 'CHANGE_LAYER_STYLE_PAINT'
const ADD_SOURCE = 'ADD_SOURCE'
const ADD_LAYER = 'ADD_LAYER'

const initialState = {
  style: style,
  viewport: {
    width: 900,
    height: 900,
    latitude: 37,
    longitude: -122,
    zoom: 8
  }
}

export function updateLatLng(lat, lng) {
  return {
    type: UPDATE_LAT_LNG,
    lat,
    lng,
  }
}

export function addReactMapGLStyle(style) {
  return {
    type: ADD_REACTMAPGL_STYLE,
    style
  }
}

export function changeLayerStylePaint(payload) {
  return {
    type: CHANGE_LAYER_STYLE_PAINT,
    payload,
  }
}

export function addLayer(payload) {
  return {
    type: ADD_LAYER,
    payload
  }
}

export function addSource(payload) {
  return {
    type: ADD_SOURCE,
    payload
  }
}

const viewport = function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_LAT_LNG:
      return {
        ...state,
        viewport: {
          ...state.viewport,
          latitude: action.lat,
          longitude: action.lng,
        }
      } 
    case ADD_REACTMAPGL_STYLE:
      return {
        ...state,
        style: action.style
      }
    case CHANGE_LAYER_STYLE_PAINT:
      let currentID = action.payload.layerId
      let newLayers = Object.assign([], state.style.layers)
      newLayers[currentID] = {
        ...state.style.layers[currentID],
        "layout": {
          "visibility": action.payload.visibility
        }
      }
      return {
        ...state,
        style: {
          ...state.style, 
          layers: newLayers
        }
      }
    case ADD_LAYER:
        return {
            ...state,
            style: {
                ...state.style,
                layers: [
                    ...state.style.layers, 
                    action.payload.layer
                ]
            }
        }
    case ADD_SOURCE:
        let newSources = Object.assign({}, state.style.sources)
        newSources[action.payload.name] = action.payload.source
        return {
            ...state,
            style: {
                ...state.style,
                sources: newSources
            }
        }
    default:
      return state
  }
}

export default viewport
