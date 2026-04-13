import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, MessageCircle, Smile } from "lucide-react";

export default function ESLWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Fun English Lessons 🎶</h1>
          <p className="text-lg text-gray-600">
            Learn English through music, conversation, and confidence-building.
          </p>
          <Button className="text-lg px-6 py-4">Book a Free Trial Lesson</Button>
        </div>

        {/* About */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p>
              Hi, I’m an English teacher based in the UK. I specialise in fun,
              relaxed lessons for Chinese learners. My goal is simple: help you
              speak English with confidence.
            </p>
          </CardContent>
        </Card>

        {/* Method */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center space-y-2">
              <Music className="mx-auto" />
              <h3 className="font-semibold">Learn with Music</h3>
              <p className="text-sm text-gray-600">
                Songs make English easy to remember and fun.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center space-y-2">
              <MessageCircle className="mx-auto" />
              <h3 className="font-semibold">Real Conversation</h3>
              <p className="text-sm text-gray-600">
                Practice speaking from day one.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center space-y-2">
              <Smile className="mx-auto" />
              <h3 className="font-semibold">No Pressure</h3>
              <p className="text-sm text-gray-600">
                Relaxed lessons to build confidence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Services */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Lessons</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Beginner English (A1–A2)</li>
              <li>Conversation Practice</li>
              <li>Music-Based Learning</li>
              <li>1-to-1 or Small Groups</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-3 text-center">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p>Email: yourname@email.com</p>
            <p>WeChat: yourwechatid</p>
            <Button className="mt-4">Start Learning Today</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
