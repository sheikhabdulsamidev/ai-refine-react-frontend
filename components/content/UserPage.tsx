"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { users } from "@/utils/mock/data";
import { roles } from "@/utils/constants";
import { UserModal, UserDetailModal } from "@/components/dialog";
import { UserCard } from "@/components/cards";
export default function UserPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState<(typeof users)[0] | null>(null);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const [showCreateUserDialog, setShowCreateUserDialog] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
  });

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  const handleViewDetails = (user: (typeof users)[0]) => {
    setSelectedUser(user);
    setShowDetailsDialog(true);
  };

  const handleCreateUser = () => {
    console.log("Creating user:", newUser);
    setShowCreateUserDialog(false);
    setNewUser({
      name: "",
      email: "",
      role: "",
      status: "Active",
    });
  };

  return (
    <div className="p-8 bg-[#070c1c] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold text-white">Users</h1>
            <p className="text-muted-foreground mt-2">
              Manage your team members and their access levels
            </p>
          </div>
          <UserModal
            showCreateUserDialog={showCreateUserDialog}
            setShowCreateUserDialog={setShowCreateUserDialog}
            newUser={newUser}
            setNewUser={setNewUser}
            handleCreateUser={handleCreateUser}
          />
        </div>

        <div className="bg-card rounded-xl shadow-sm border border-border mb-6">
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-muted"
                />
              </div>
              <div className="flex gap-4">
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger className="w-[180px] bg-muted">
                    <SelectValue placeholder="Filter by role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} handleViewDetails={handleViewDetails} />
          ))}
        </div>

        <UserDetailModal
          showDetailsDialog={showDetailsDialog}
          setShowDetailsDialog={setShowDetailsDialog}
          selectedUser={selectedUser}
        />
      </div>
    </div>
  );
}
