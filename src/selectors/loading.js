import { createSelector } from 'reselect'

export const loadingStateSelector = state => state.loading

export const isLoadingSelector = actions => createSelector(
  loadingStateSelector,
  loading => actions.some(action => loading[action]),
)
