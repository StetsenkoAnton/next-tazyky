'use client'
export default function UiTextList({
  textBefore = "",
  textObject = {},
  textAfter = ""
}) {
  const listArr = Object.keys(textObject).filter((key) => textObject[key]);
  const list = listArr.join(', ')
  if (!list && !textBefore)  return "";
  return (
    <span>{`${textBefore} ${list}${textAfter}`}</span>
  )
}
