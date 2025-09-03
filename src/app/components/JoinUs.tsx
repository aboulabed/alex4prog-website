'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { useState } from 'react';

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
const openings = [
    { id: 'System Admin', color: 'text-blue-600', svg: '/positions/admin.svg' },
    { id: 'Backend Developer', color: 'text-emerald-600', svg: '/positions/backend-dev.svg' },
];

export default function JoinUs() {
    const t = useTranslations('JoinUs');
    const [open, setOpen] = useState(false)
    const [selectedJob, setSelectedJob] = useState<string | null>(null)

    const handleApply = (jobId: string) => {
        setSelectedJob(jobId)
        setOpen(true)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setOpen(false)
        alert(`✅ تم التقديم بنجاح لوظيفة: ${selectedJob}`)
    }
    return (
        <section className="py-16 bg-gray-50" id="joinus">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <motion.h2
                        className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                    >
                        {t('sectionTitle')}
                    </motion.h2>

                    <motion.p
                        className="mt-6 text-xl font-bold text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        {t('openingsTitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                    {openings.map((o) => (
                        <motion.div
                            key={o.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: false }}
                            className="rounded-2xl border border-black/5 bg-white p-8 shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                        >
                            <img src={o.svg} alt={o.id} className='max-h-10 mb-5 ' />
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                {o.id}
                            </h3>
                            <button
                                type="button"
                                onClick={() => handleApply(o.id)}
                                className="mt-2 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                            >
                                {t('applyNow')}
                            </button>

                        </motion.div>
                    ))}
                </div>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="sm:max-w-[480px] rounded-2xl border border-black/10 bg-white shadow-2xl">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-gray-900">
                                {t('applyNow')} {selectedJob && `- ${selectedJob}`}
                            </DialogTitle>
                            <DialogDescription className="text-gray-600">
                                {t('fillYourInfo')}
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">{t('name')}</Label>
                                <Input id="name" name="name" required className="focus-visible:ring-indigo-500" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">{t('email')}</Label>
                                <Input id="email" name="email" type="email" required className="focus-visible:ring-indigo-500" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="cv">{t('upload_cv')}</Label>
                                <Input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" required />
                            </div>
                            <DialogFooter className="mt-4">
                                <DialogClose asChild>
                                    <Button type="button" variant="outline">{t('cancel')}</Button>
                                </DialogClose>
                                <Button type="submit" className="bg-indigo-600 text-white hover:bg-indigo-700">{t('submit')}</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>

            </div>

        </section>
    );
}