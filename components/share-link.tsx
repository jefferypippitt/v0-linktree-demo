"use client"


import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster, toast } from 'sonner';
import { Copy, DotsThreeCircle } from '@phosphor-icons/react';


const ShareLink: FC = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("https://github.com/jefferypippitt");
    toast.success("Link copied");
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">
            <DotsThreeCircle className="w-6 h-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-xs sm:max-w-md p-4 sm:p-6 mx-4 sm:mx-auto rounded-lg">
          <DialogHeader>
            <DialogTitle>Share link 🔗</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="grid flex-1 gap-2 w-full">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                disabled
                id="link"
                defaultValue="https://github.com/jefferypippitt/"
                readOnly
                className="w-full"
              />
            </div>
            <Button
              type="button"
              size="sm"
              className="px-3 w-full sm:w-auto"
              onClick={handleCopy}
            >
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShareLink;
