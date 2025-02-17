import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import  path from "@/path";

export default async function TopicList() {
  const topic = await db.topic.findMany();

  const renderedTopics = topic.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={path.topicShow(topic.slug)}>
        <Chip color="warning" variant="shadow">{topic.slug}</Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>
}
