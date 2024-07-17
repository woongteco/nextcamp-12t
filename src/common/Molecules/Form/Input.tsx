import {
  Text,
  Number,
  Email,
  Password,
  Textarea,
  Checkbox,
  Radio,
} from "@/common/Atoms/Form/InputElement";
import Select from "@/common/Atoms/Form/Select";
import DateRangePicker from "@/common/Atoms/Form/DateRange";

export default Object.assign(
  {},
  {
    Text,
    Number,
    Email,
    Password,
    Textarea,
    Checkbox,
    Radio,
    Select: Select,
    DateRange: DateRangePicker,
  }
);
