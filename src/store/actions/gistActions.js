import { service } from "../../services/service";
import type from "../constant/gistConstants";

export const loadGists = (username) => (dispatch) => {
  dispatch({
    type: type.GET_GISTS_REQUEST,
    payload: {
      loading: true,
    },
  });
  service
    .getAllGist(username)
    .then(({ data }) => {
      dispatch({
        type: type.GET_GISTS_SUCCESS,
        payload: {
          gists: data,
          loading: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: type.GET_GISTS_FAILED,
        payload: {
          loading: false,
        },
      });
    });
};
export const loadGistById = (id) => (dispatch) => {
  dispatch({
    type: type.GET_GIST_BY_ID_REQUEST,
    payload: {
      loading: true,
    },
  });
  service
    .getGistById(id)
    .then(({ data }) => {
      dispatch({
        type: type.GET_GIST_BY_ID_SUCCESS,
        payload: {
          data: data,
          loading: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: type.GET_GIST_BY_ID_FAILED,
        payload: {
          loading: false,
        },
      });
    });
};
