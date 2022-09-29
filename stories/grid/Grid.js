import React from 'react'
import PropTypes from 'prop-types'
import st from './Grid.module.css'
import { GridItem } from '../gridItem/GridItem'

// const items = () => {
//   let list = []
//   for (let i = 0; i < 25; i++) {
//     list.push(<GridItem className={st.gridItem} />)
//   }
//   return list
// }

export const Grid = () => {
  return (
    <div
    className={st.grid}
    >
      <GridItem className={st.gridItem} label="Event" desc="こんなイベントがあるよ！"/>
      <GridItem className={st.gridItem2} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem3} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem}  label="Event" desc="Happy Event!"/>
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem} />
      <GridItem className={st.gridItem} />
    </div>
  )
}

Grid.propTypes = {}

Grid.defaultProps = {}
