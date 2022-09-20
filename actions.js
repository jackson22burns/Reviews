export const Action = Object.freeze({
    LoadedProductions: "LoadedProductions",
    StartedWaiting:"StartedWaiting",
    StoppedWaiting: "StoppedWaiting",
    AddProduction: "AddProduction",
    RemoveProduction: 'RemoveProduction'
  });
  
  export function loadedProductions(productions) {
    return {type: Action.LoadedProductions, payload: productions};
  }

  export function addProduction(production) {
    // console.log("TEST");
    // console.log(production);
    return {type: Action.AddProduction, payload: production};
    
  }
  
  export function showProgress() {
    return {type: Action.StartedWaiting};
  }
  
  export function hideProgress() {
    return {type: Action.StoppedWaiting};
  }

  export function removeProduction(id) {
    return {type: Action.RemoveProduction, payload: id};
  }
  
  function assertResponse(response) {
    if (response.status >= 200 || response.status < 300) {
      return response;
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }
  
  export function fetchProductions() {
    //('fetchProductions')
    return (dispatch) => {
        dispatch(showProgress());
        fetch(`https://project2.brandonq.me:8443/productions`)
          .then(assertResponse)
          .then((response) => response.json())
          .then((data) => {
            // console.log("TEST");
            // console.log(data.result);
            dispatch(loadedProductions(data.result));
            //dispatch(hideProgress());
          });
      };
  }

  export function newProduction(p_name, p_type, p_genre, score, summary) {
    const prod = {
      p_name, p_type, p_genre, score, summary,
    };

    return (dispatch) => {
      //console.log(prod);
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prod),
      };
      console.log(options.body);
      fetch(`https://project2.brandonq.me:8443/newEntry`, options)
        .then(assertResponse)
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            //console.log(data.results);
            dispatch(addProduction({
              ...prod,
               //id: data.results,
            }));
            dispatch(fetchProductions());

          }
        });
    };
  }

  export function deleteProduction(id) {
    return dispatch => {
      const options = {
        method: 'DELETE',
      };
      fetch(`https://project2.brandonq.me:8443/prodDelete/${id}`, options)
        .then(assertResponse)
        .then(response => response.json())
        .then(data => {
          //console.log(data);
          if (data.ok) {
            dispatch(removeProduction(id));
            dispatch(fetchProductions());
          }
        });
    };
  }
  