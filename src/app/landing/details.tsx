import { CalendarCheck, BarChart3, Bell, UserCheck, FileSpreadsheet, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RevealOnScroll from "@/components/reveal-on-scroll"

export default function FeaturesSection() {
  const features = [
    {
      icon: <CalendarCheck className="h-10 w-10 text-cyan-500" />,
      title: "Real-time Attendance",
      description:
        "Track attendance in real-time with our intuitive interface. No more paper registers or manual data entry.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-fuchsia-500" />,
      title: "Comprehensive Analytics",
      description:
        "Gain insights with detailed attendance reports and analytics to identify patterns and improve student engagement.",
    },
    {
      icon: <Bell className="h-10 w-10 text-cyan-500" />,
      title: "Automated Notifications",
      description: "Send automated alerts to parents and administrators about absences and attendance issues.",
    },
    {
      icon: <UserCheck className="h-10 w-10 text-fuchsia-500" />,
      title: "Student Profiles",
      description:
        "Access comprehensive student profiles with attendance history, contact information, and performance metrics.",
    },
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-cyan-500" />,
      title: "Export Reports",
      description: "Generate and export detailed attendance reports in multiple formats for administrative purposes.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-fuchsia-500" />,
      title: "Communication Tools",
      description:
        "Built-in messaging system to communicate with students, parents, and staff about attendance matters.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white relative z-10">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <RevealOnScroll className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 px-3 py-1 text-sm">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything You Need to Manage Attendance
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform offers a comprehensive suite of tools designed to streamline attendance management and
              improve educational outcomes.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <Card className="border-2 border-gray-100 hover:border-cyan-500/30 transition-all hover:shadow-lg group">
                <CardHeader>
                  <div className="mb-2 transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
