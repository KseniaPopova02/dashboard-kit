import {
  StyledHeaderWrapper,
  StyledBtnWrapper,
  StyledBtnRight,
  StyledHeaderSvg,
  StyledInput,
  StyledBtnLeft,
  StyledPlusOutlined,
  StyledBtnText,
  StyledSpan,
} from "./style";
import { ReactComponent as SortSvg } from "../../assets/svg/sort.svg";
import { ReactComponent as FilterSvg } from "../../assets/svg/filter.svg";
import { ReloadOutlined, DeleteOutlined } from "@ant-design/icons";

export const TableHeader = ({
  handleSort,
  isInputActive,
  handleFilterInputBlur,
  handleFilter,
  filterText,
  handleFilterInputClick,
  setShowForm,
  handleDeleteAll,
  handleReset,
}) => (
  <StyledHeaderWrapper>
    <StyledBtnWrapper className="left">
      <StyledBtnRight onClick={handleSort}>
        <StyledHeaderSvg>
          <SortSvg />
        </StyledHeaderSvg>
        <div>Sort</div>
      </StyledBtnRight>
      {isInputActive ? (
        <StyledInput
          type="text"
          placeholder="Filter contacts by name"
          onBlur={handleFilterInputBlur}
          onChange={(e) => handleFilter(e.target.value)}
          autoFocus
          value={filterText}
        />
      ) : (
        <StyledBtnRight onClick={handleFilterInputClick}>
          <StyledHeaderSvg>
            <FilterSvg />
          </StyledHeaderSvg>
          <div>
            Filter <StyledSpan>contacts by name</StyledSpan>
          </div>
        </StyledBtnRight>
      )}
    </StyledBtnWrapper>
    <StyledBtnWrapper>
      <StyledBtnLeft onClick={() => setShowForm(true)}>
        <StyledPlusOutlined />
        <StyledBtnText>Add contact</StyledBtnText>
      </StyledBtnLeft>
      <StyledBtnLeft onClick={handleDeleteAll}>
        <DeleteOutlined />
      </StyledBtnLeft>

      <StyledBtnLeft onClick={handleReset}>
        <ReloadOutlined />
      </StyledBtnLeft>
    </StyledBtnWrapper>
  </StyledHeaderWrapper>
);
