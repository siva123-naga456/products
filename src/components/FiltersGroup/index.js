import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingFilterList = () => {
    const {ratingsList} = props

    return ratingsList.map(each => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(each.ratingId)
      const ratingName =
        activeRatingId === each.ratingId ? 'ratingActive' : 'un-ratingActive'

      return (
        <li
          className="item-name"
          key={each.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            className="star-image"
            src={each.imageUrl}
            alt={`rating ${each.ratingId}`}
          />
          <p className={ratingName}>&up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <div>
      <h1 className="heading">Rating</h1>
      <ul>{renderRatingFilterList()}</ul>
    </div>
  )

  const renderCategoryList = item => {
    const {changeCategory, activeCategoryId} = props
    const isActive = item.categoryId === activeCategoryId
    const categoryName = isActive ? 'active' : 'un-active'

    const onClickCategoryItem = () => changeCategory(item.categoryId)

    return (
      <li
        key={item.categoryId}
        onClick={onClickCategoryItem}
        className="items-name"
      >
        <p className={categoryName}>{item.name}</p>
      </li>
    )
  }

  const renderProductCategories = () => {
    const {categoryOptions} = props
    return (
      <>
        <h1 className="heading">Category</h1>
        <ul>{categoryOptions.map(each => renderCategoryList(each))}</ul>
      </>
    )
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onchangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-container">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          value={searchInput}
          onChange={onchangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch />
      </div>
    )
  }

  const {clearFilter} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingFilters()}
      <button type="button" onClick={clearFilter} className="clear-btn">
        clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
