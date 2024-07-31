import TextEditor from "@/common/Atoms/Form/TextEditor";
import LinkButton from "@/common/Atoms/LinkButton";
import Button from "@/common/Atoms/Form/Button";
import GridField from "@/common/Atoms/Form/Field";
import { LabelText } from "@/common/Atoms/Form/Label";
import Input from "@/common/Molecules/Form/Input";
import SelectCategory from "./_components/SelectCategory";
import { getSession } from "@/auth";
import NotFound from "@/app/not-found";
import PostForm from "./_components/PostForm";

export default async function PostWrite() {
  const session = await getSession();

  if (!session) {
    return <NotFound />;
  }

  return (
    <>
      <PostForm session={session} />
    </>
  );
}
