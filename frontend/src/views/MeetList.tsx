import {useState, useEffect, useCallback, ChangeEvent, KeyboardEvent} from 'react'
import {Pagination, TextField} from '@mui/material'
import {Search, AddCircle} from '@mui/icons-material'
import CardComponent from '../components/CardComponent'
import Modal from '../components/Modal'
import {useToggle} from '../hooks/useToggle'

const MeetList = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [searchResults, setSearchResults] = useState([])
  const [open, toggleOpen] = useToggle(false)

  const handleSearchKeywordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setSearchKeyword(e.target.value)
    },
    []
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        // 검색 키워드로 localDB에서 결과를 필터링

        setSearchResults([])
      }
    },
    [searchKeyword]
  )

  const handleModalClick = useCallback(() => {
    console.log('card 클릭')
    toggleOpen()
  }, [])

  return (
    <>
      <main>
        <div className="w-4/5 mx-auto my-4 mb-4">
          <div className="flex justify-end mb-4">
            <TextField
              label="검색"
              value={searchKeyword}
              onChange={handleSearchKeywordChange}
              onKeyDown={handleKeyDown}
              variant="outlined"
              InputProps={{
                endAdornment: <Search />
              }}
            />
          </div>
          <div className="mb-4 text-end">
            <button className="custom-btn">+</button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <CardComponent
              title="Lizard"
              subTitle="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
              onClick={handleModalClick}
            />
            <CardComponent
              title="Lizard"
              subTitle="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
              onClick={handleModalClick}
            />
            <CardComponent
              title="Lizard"
              subTitle="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
              onClick={handleModalClick}
            />
            <CardComponent
              title="Lizard"
              subTitle="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
              onClick={handleModalClick}
            />
            <CardComponent
              title="Lizard"
              subTitle="Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica"
              onClick={handleModalClick}
            />
          </div>
        </div>
        <Modal open={open} handleClose={toggleOpen} />
        <div className="flex items-center justify-center">
          <Pagination count={10} color="primary" showFirstButton showLastButton />
        </div>
      </main>
    </>
  )
}

export default MeetList
