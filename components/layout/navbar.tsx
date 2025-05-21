'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Search, User, Chrome, Facebook, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/auth-context';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { user, login, signup } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/category/${searchQuery.toLowerCase()}`);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      toast({
        title: "Welcome back!",
        description: `Hello, ${email.split('@')[0]}!`,
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signup(name, email, password);
      toast({
        title: "Welcome to Xcom!",
        description: `Account created successfully. Hello, ${name}!`,
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not create account",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-700 ease-in-out ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/xcom-logo.png"
              alt="Xcom"
              width={100}
              height={40}
              className="h-8 w-auto dark:invert"
              priority
            />
          </Link>

          <form onSubmit={handleSearch} className={`hidden md:flex max-w-[500px] flex-1 mx-4 transition-all duration-700 ease-in-out ${
            isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}>
            <div className="relative flex w-full">
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands and more"
                className="w-full pr-12 focus-visible:ring-1 focus-visible:ring-primary/30"
              />
              <Button 
                type="submit"
                variant="ghost"
                className="absolute right-0 px-3 h-full"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </form>

          <div className="hidden md:flex items-center gap-6">
            {!user ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="font-semibold">
                    Login / Sign up
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Welcome to Xcom</DialogTitle>
                    <DialogDescription>
                      Login or create an account to continue
                    </DialogDescription>
                  </DialogHeader>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Login</TabsTrigger>
                      <TabsTrigger value="signup">Sign up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" className="space-y-4">
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-4 py-4">
                          <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                          {isLoading ? "Logging in..." : "Login"}
                        </Button>
                      </form>
                      <Separator />
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="w-full">
                          <Chrome className="mr-2 h-4 w-4" />
                          Google
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Facebook className="mr-2 h-4 w-4" />
                          Facebook
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="signup" className="space-y-4">
                      <form onSubmit={handleSignup} className="space-y-4">
                        <div className="space-y-4 py-4">
                          <Input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                          <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>
                          {isLoading ? "Creating account..." : "Sign up"}
                        </Button>
                      </form>
                      <Separator />
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="w-full">
                          <Chrome className="mr-2 h-4 w-4" />
                          Google
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Facebook className="mr-2 h-4 w-4" />
                          Facebook
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            ) : (
              <span className="text-sm font-medium">Hello, {user.name}!</span>
            )}

            <Link href="/cart" className="flex items-center gap-2 hover:text-foreground/80 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-medium">Cart</span>
            </Link>

            <Link href="/settings" className="flex items-center gap-2 hover:text-foreground/80 transition-colors">
              <User className="h-5 w-5" />
              <span className="font-medium">Account</span>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="py-6">
                <form onSubmit={handleSearch} className="mb-6">
                  <div className="relative flex w-full">
                    <Input
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search"
                      className="w-full pr-12"
                    />
                    <Button 
                      type="submit"
                      variant="ghost"
                      className="absolute right-0 px-3 h-full"
                    >
                      <Search className="h-5 w-5" />
                    </Button>
                  </div>
                </form>
                
                <div className="space-y-4">
                  {!user ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full">Login / Sign up</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Welcome to Xcom</DialogTitle>
                          <DialogDescription>
                            Login or create an account to continue
                          </DialogDescription>
                        </DialogHeader>
                        <Tabs defaultValue="login" className="w-full">
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="signup">Sign up</TabsTrigger>
                          </TabsList>
                          <TabsContent value="login" className="space-y-4">
                            <form onSubmit={handleLogin} className="space-y-4">
                              <div className="space-y-4 py-4">
                                <Input
                                  type="email"
                                  placeholder="Email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  required
                                />
                                <Input
                                  type="password"
                                  placeholder="Password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  required
                                />
                              </div>
                              <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Logging in..." : "Login"}
                              </Button>
                            </form>
                            <Separator />
                            <div className="grid grid-cols-2 gap-4">
                              <Button variant="outline" className="w-full">
                                <Chrome className="mr-2 h-4 w-4" />
                                Google
                              </Button>
                              <Button variant="outline" className="w-full">
                                <Facebook className="mr-2 h-4 w-4" />
                                Facebook
                              </Button>
                            </div>
                          </TabsContent>
                          <TabsContent value="signup" className="space-y-4">
                            <form onSubmit={handleSignup} className="space-y-4">
                              <div className="space-y-4 py-4">
                                <Input
                                  type="text"
                                  placeholder="Full Name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  required
                                />
                                <Input
                                  type="email"
                                  placeholder="Email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  required
                                />
                                <Input
                                  type="password"
                                  placeholder="Password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  required
                                />
                              </div>
                              <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Creating account..." : "Sign up"}
                              </Button>
                            </form>
                            <Separator />
                            <div className="grid grid-cols-2 gap-4">
                              <Button variant="outline" className="w-full">
                                <Chrome className="mr-2 h-4 w-4" />
                                Google
                              </Button>
                              <Button variant="outline" className="w-full">
                                <Facebook className="mr-2 h-4 w-4" />
                                Facebook
                              </Button>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <div className="px-2 py-4">
                      <p className="text-sm font-medium">Hello, {user.name}!</p>
                    </div>
                  )}
                  
                  <Link href="/cart">
                    <Button variant="ghost" className="w-full justify-start">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Cart
                    </Button>
                  </Link>
                  
                  <Link href="/settings">
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="mr-2 h-5 w-5" />
                      Account
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}