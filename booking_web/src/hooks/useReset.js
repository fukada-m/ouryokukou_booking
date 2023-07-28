import { useSetRecoilState } from "recoil";
import { dateState, hourState, minuteState, nameState, numberOfAdultsState, numberOfChildrenState, bookingCategoryIdState, tableIdState, noteState } from "../atom/state";

export const useReset = () => {
    const setDate = useSetRecoilState(dateState)
    const setHour = useSetRecoilState(hourState)
    const setMinute = useSetRecoilState(minuteState)
    const setName = useSetRecoilState(nameState)
    const setNumberOfAdults = useSetRecoilState(numberOfAdultsState)
    const setNumberOfChildren = useSetRecoilState(numberOfChildrenState)
    const setBookingCategoryId = useSetRecoilState(bookingCategoryIdState)
    const setTableId = useSetRecoilState(tableIdState)
    const setNote = useSetRecoilState(noteState)

    const reset = () => {
      setDate("")
      setHour("18")
      setMinute("00")
      setName("")
      setNumberOfAdults("2")
      setNumberOfChildren("0")
      setBookingCategoryId("1")
      setTableId("")
      setNote("")
    }
    return { reset }
  }
