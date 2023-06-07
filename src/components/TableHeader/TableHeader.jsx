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
import React, { useState } from "react";

export const TableHeader = ({
  handleSort,
  handleFilter,
  filterText,
  setShowContactsForm,
  handleDeleteAll,
  headerText,
}) => {
  const [isInputActive, setIsInputActive] = useState(false);

  const handleReset = () => {
    handleFilter("");
    setIsInputActive(false);
  };

  const handleFilterInputClick = () => {
    setIsInputActive(true);
  };

  const handleFilterInputBlur = (e) => {
    if (!e.target.value) {
      setIsInputActive(false);
    }
  };

  return (
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
              Filter <StyledSpan>{headerText.filterContacts}</StyledSpan>
            </div>
          </StyledBtnRight>
        )}
      </StyledBtnWrapper>
      <StyledBtnWrapper>
        <StyledBtnLeft onClick={() => setShowContactsForm(true)}>
          <StyledPlusOutlined />
          <StyledBtnText>{headerText.addContact}</StyledBtnText>
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
};
