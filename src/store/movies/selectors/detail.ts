import { createSelector } from 'reselect'
import { AppState } from 'store/store'
import { getYear } from 'utils'

export const getDetailSelector = (state: AppState) =>
  state.movieReducer.detailReducer

export const getDetailInfoSelector = createSelector(
  getDetailSelector,
  (details) => {
    if (details.detail.length !== 0) {
      const { detail } = details

      return [
        { name: 'year', value: getYear(detail.release_date) },
        {
          name: 'country',
          value: detail.production_countries
            .slice(0, 2)
            .map((item: any) => item.name)
            .join(' '),
        },
        {
          name: 'language',
          value: detail.spoken_languages
            .map((item: any) => item.name)
            .join(' '),
        },
        {
          name: 'director',
          value: details.casts.crew.filter((item) => item.job === 'Director')[0]
            .name,
        },
        {
          name: 'genre',
          value: detail.genres.map((item: any) => item.name).join(' '),
        },
        {
          name: 'running',
          value: `${detail.runtime} min / ${
            Math.floor(detail.runtime / 60) + 'h ' + (detail.runtime % 60) + 'm'
          }`,
        },
        { name: 'IMDB', value: detail.vote_average },
      ]
    }
  }
)
